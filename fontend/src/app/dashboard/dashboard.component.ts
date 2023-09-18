import { Component, Input } from "@angular/core";
import { f1drivers } from "src/lib/models/f1drivers";
import { Apollo, gql } from 'apollo-angular';
type f1DriverKey = keyof f1drivers;
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
})
export class Dashboard {
    drivers: f1drivers[] = [];
    categorizeValues: Array<{ key: string, values: string[] }> = []
    constructor(private apollo: Apollo) {
    }
    async getF1Drivers() {
        this.apollo.watchQuery({
            query: gql<{ getF1Drivers: f1drivers[] }, {}> `
            query F1DriversQuery{
              getF1Drivers{
                id
                Champion
                Driver
                Nationality
                Championships
                Decade
              }
            }`
        }).valueChanges.subscribe((result) => {
            this.drivers = result.data.getF1Drivers
            for (const driver of this.drivers) {
                for (const [key, value] of Object.entries(driver)) {
                    if (value && key !== "__typename" && key !== "id") {
                        if (!this.categorizeValues.some((item) => item.key === key)) {
                            this.categorizeValues.push({ key, values: [] });
                        }
                        const categoryItem = this.categorizeValues.find((item) => item.key === key);
                        if (categoryItem) {
                            if (!categoryItem.values.includes(value)) {
                                categoryItem.values.push(value);
                            }
                        }
                    }
                }
            }
        })
    }

    ngOnInit(): void {
        this.getF1Drivers();
    }
    setFilterData(filterData: f1drivers[]) {
        if (filterData.length > 0) {
            this.drivers = filterData
        }
    }
}