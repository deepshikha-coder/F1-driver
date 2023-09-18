import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Apollo, gql } from 'apollo-angular';
import { f1drivers } from "src/lib/models/f1drivers";
@Component({
    selector: "filters",
    templateUrl: './filters.html'
})
export class Filter {
    @Input() categorizedValue: Array<{ key: string, values: string[] }> = [];
    @Output() filteredRows = new EventEmitter<f1drivers[]>();
    selectedKeyOptions:string[] = []
    filterModelOpen: boolean = false
    selectedKey: string = '';
    selectedValue: string = '';

    toggleModal() {
        this.filterModelOpen = !this.filterModelOpen;
    }
    setSelectedKey(value: string) {
        this.selectedKey = value
        const valuesForKey = (this.categorizedValue.find((item) => item.key === value))?.values
        if (valuesForKey) {
            this.selectedKeyOptions = valuesForKey.sort((a, b) => a.localeCompare(b))
        }
    }
    setSelectedValue(value: string) {
        this.selectedValue = value
    }

    constructor(private apollo: Apollo) { }
    async getF1Drivers() {
        this.apollo.watchQuery({
            variables: { [this.selectedKey.toLocaleLowerCase()]:this.selectedValue },
            query: gql<{ getF1Drivers: f1drivers[] }, {}> `
            query F1DriversQuery($driver: String, $nationality:String, $championships:String, $decade:String, $champion:String) {
                getF1Drivers(driver: $driver, nationality: $nationality, championships: $championships, decade: $decade, champion: $champion){
                    id
                    Champion
                    Driver
                    Nationality
                    Championships
                    Decade
              }
            }`
        }).valueChanges.subscribe((result) => {
            this.filteredRows.emit(result.data.getF1Drivers)
        })
    }
    applyFilter() {
        this.toggleModal()
        this.getF1Drivers()
    }

    clearFilter(){
        window.location.reload()
    }
}