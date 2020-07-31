import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html"
})
export class DataTableComponent implements OnInit {
  options: DataTables.Settings = {};
  pageTitle: string = "Data Table";
  pageSubTitle: string = "Angular DataTables is a directive for jQuery DataTables which adds advanced interaction controls to your HTML tables.";

  columns: Array<any> = [
    {
      title: "ID",
      name: "id"
    },
    {
      title: "First Name",
      name: "first_name"
    },
    {
      title: "Last Name",
      name: "last_name"
    },
    {
      title: "Email Address",
      name: "email"
    },
    {
      title: "Gender",
      name: "gender"
    },
    {
      title: "IP Address",
      name: "ip_address"
    }
  ];
  constructor() {}

  ngOnInit() {
    this.options = {
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      processing: true,
      serverSide: true,
      ajax: function(parameters: any, callback) {
        console.log(parameters)
        // make a regular ajax request using data.start and data.length
        $.get('https://bogus-rest-api.herokuapp.com/users/', {
          _limit: parameters.length,
          _page: Math.ceil(parameters.start/parameters.length) + 1,
          q: parameters.search.value
        }, function(res) {
          callback({
            recordsTotal: 200,
            recordsFiltered: 200,
            data: res,
          });
        });
      },
      columns: [
        {data: "id"},
        {data: "first_name"},
        {data: "last_name"},
        {data: "email"},
        {data: "gender"},
        {data: "ip_address"}
      ]
    }
    /*
    this.options = {
      autoWidth: false,
      responsive: true,
      language: {
        searchPlaceholder: "Search for records..."
      },
      lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']],
      "dom": '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
    };
    */
  }
}
