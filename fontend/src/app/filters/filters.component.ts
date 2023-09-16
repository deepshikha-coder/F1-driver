import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Apollo, gql } from 'apollo-angular';
import { f1drivers } from "src/lib/models/f1drivers";
@Component({
    selector: "filters",
    templateUrl: './filters.html'
})
export class Filter {
    @Input() selectedKeyOptions: string[] = [];
    @Output() filteredRows = new EventEmitter<f1drivers[]>();
    @Output() emitSelectedKey = new EventEmitter<string>();
    filterModelOpen: boolean = false
    selectedKey: string = '';
    selectedValue: string = '';
    toggleModal() {
        this.filterModelOpen = !this.filterModelOpen;
    }
    setSelectedKey(value: string) {
        this.selectedKey = value
        this.emitSelectedKey.emit(value)
    }
    setSelectedValue(value: string) {
        this.selectedValue = value
    }

    constructor(private apollo: Apollo) { }
    async getF1Drivers() {
        console.log('fetching f1drivers', this.selectedKey, this.selectedValue);
        this.apollo.watchQuery({
            variables: { driver: this.selectedValue, nationality: this.selectedValue, championships: this.selectedValue, decade: this.selectedValue, champion: this.selectedValue },
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
            console.log('results:', result.data.getF1Drivers)
            this.filteredRows.emit(result.data.getF1Drivers)
        })
    }
    applyFilter() {
        this.toggleModal()
        this.selectedKeyOptions = []
        this.getF1Drivers()
    }
    clearFilter(){
        window.location.reload()
    }
}