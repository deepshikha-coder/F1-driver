import { Component, Input } from "@angular/core";
import { f1drivers } from "src/lib/models/f1drivers";
import { Apollo, gql } from 'apollo-angular';
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
})

export class Dashboard {
    drivers: f1drivers[] = [];
    constructor(private apollo: Apollo) {}
    async getF1Drivers() {
        console.log('fetching f1drivers');
        this.apollo.watchQuery({
            query: gql<{ getF1Drivers: f1drivers[] }, {value:"Carlo Abate"}> `
            query F1DriversQuery($value: String){
              getF1Drivers(Driver: $value){
                id
                Active
                Champion
                Driver
                Fastest_Laps
                Nationality
                Seasons
                Championships
                Race_Entries
                Race_Starts
                Pole_Positions
                Race_Wins
                Podiums
                Points
                ChampionshipYears
                Decade
                Pole_Rate
                Start_Rate
                Win_Rate
                Podium_Rate
                FastLap_Rate
                Points_Per_Entry
                Years_Active
              }
            }`
        }).valueChanges.subscribe((result) => {
            console.log('results:', result)
            this.drivers = result.data.getF1Drivers
        })
    }

    ngOnInit(): void {
        this.getF1Drivers();
    }
}