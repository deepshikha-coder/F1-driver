import { Component } from "@angular/core";
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from "rxjs";

const GET_filtered_list = gql`
query F1DriversQuery($value: String) {
    getF1Drivers(id:$value) {
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
  }`;


@Component({
    selector: "filters",
    templateUrl: './filters.html'
})
export class Filter {
    modelOpen: boolean = false
    selectedColumnName: string = '';
    selectedValue: string = ''
    selectedColumnValues: string[] = [];
    private querySubscription: Subscription = Subscription.EMPTY;
    constructor(private apollo: Apollo) {
    }
    toggleModal() {
        this.modelOpen = !this.modelOpen;
    }
    setKey(value: string) {
        this.selectedColumnName = value

    }
    setValue(value: string) {
        this.selectedValue = value
    }
    FilterTable() {
        this.querySubscription = this.apollo
      .watchQuery({
        query: GET_filtered_list,
        variables: {
          value: this.selectedValue,
        },
      })
      .valueChanges.subscribe(({ data }) => {
       console.log(data)
      });
      console.log(this.querySubscription)
    }
}