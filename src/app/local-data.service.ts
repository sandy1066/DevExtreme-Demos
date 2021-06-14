import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  getCustomers(): Customer[] {
    return customers;
  }

  getStates(): State[] {
    return states;
  }

  constructor() { }
}

export class Customer {
  ID: number;
  CompanyName: string;
  date: string;
  Address: string;
  City: string;
  State: number;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

let customers: Customer[] = [{
  "ID": 1,
  "CompanyName": "Super Mart of the West",
  "date": "May 31,2020",
  "Address": "702 SW 8th Street",
  "City": "Bentonville",
  "State": 4,
  "Zipcode": 72716,
  "Phone": "(800) 555-2797",
  "Fax": "(800) 555-2171",
  "Website": "http://www.nowebsitesupermart.com"
}, {
  "ID": 2,
  "CompanyName": "Electronics Depot",
  "date": "June 01,2008",
  "Address": "2455 Paces Ferry Road NW",
  "City": "Atlanta",
  "State": 11,
  "Zipcode": 30339,
  "Phone": "(800) 595-3232",
  "Fax": "(800) 595-3231",
  "Website": "http://www.nowebsitedepot.com"
}, {
  "ID": 3,
  "CompanyName": "K&S Music",
  "date": "August 15,2005",
  "Address": "1000 Nicllet Mall",
  "City": "Minneapolis",
  "State": 24,
  "Zipcode": 55403,
  "Phone": "(612) 304-6073",
  "Fax": "(612) 304-6074",
  "Website": "http://www.nowebsitemusic.com"
}, {
  "ID": 4,
  "CompanyName": "Tom's Club",
  "date": "July 21,2021",
  "Address": "999 Lake Drive",
  "City": "Issaquah",
  "State": 47,
  "Zipcode": 98027,
  "Phone": "(800) 955-2292",
  "Fax": "(800) 955-2293",
  "Website": "http://www.nowebsitetomsclub.com"
}, {
  "ID": 5,
  "CompanyName": "E-Mart",
  "date": "January 05,2000",
  "Address": "3333 Beverly Rd",
  "City": "Hoffman Estates",
  "State": 14,
  "Zipcode": 60179,
  "Phone": "(847) 286-2500",
  "Fax": "(847) 286-2501",
  "Website": "http://www.nowebsiteemart.com"
}, {
  "ID": 6,
  "CompanyName": "Walters",
  "date": "March 22,2008",
  "Address": "200 Wilmot Rd",
  "City": "Deerfield",
  "State": 14,
  "Zipcode": 60015,
  "Phone": "(847) 940-2500",
  "Fax": "(847) 940-2501",
  "Website": "http://www.nowebsitewalters.com"
}, {
  "ID": 7,
  "CompanyName": "StereoShack",
  "date": "November 26, 2010",
  "Address": "400 Commerce S",
  "City": "Fort Worth",
  "State": 43,
  "Zipcode": 76102,
  "Phone": "(817) 820-0741",
  "Fax": "(817) 820-0742",
  "Website": "http://www.nowebsiteshack.com"
}, {
  "ID": 8,
  "CompanyName": "Circuit Town",
  "date": "July 30,2016",
  "Address": "2200 Kensington Court",
  "City": "Oak Brook",
  "State": 14,
  "Zipcode": 60523,
  "Phone": "(800) 955-2929",
  "Fax": "(800) 955-9392",
  "Website": "http://www.nowebsitecircuittown.com"
}, {
  "ID": 9,
  "CompanyName": "Premier Buy",
  "date": "December 31,2009",
  "Address": "7601 Penn Avenue South",
  "City": "Richfield",
  "State": 24,
  "Zipcode": 55423,
  "Phone": "(612) 291-1000",
  "Fax": "(612) 291-2001",
  "Website": "http://www.nowebsitepremierbuy.com"
}, {
  "ID": 10,
  "CompanyName": "ElectrixMax",
  "date": "February 11,2019",
  "Address": "263 Shuman Blvd",
  "City": "Naperville",
  "State": 14,
  "Zipcode": 60563,
  "Phone": "(630) 438-7800",
  "Fax": "(630) 438-7801",
  "Website": "http://www.nowebsiteelectrixmax.com"
}, {
  "ID": 11,
  "CompanyName": "Video Emporium",
  "date": "September 11, 2003",
  "Address": "1201 Elm Street",
  "City": "Dallas",
  "State": 43,
  "Zipcode": 75270,
  "Phone": "(214) 854-3000",
  "Fax": "(214) 854-3001",
  "Website": "http://www.nowebsitevideoemporium.com"
}, {
  "ID": 12,
  "CompanyName": "Screen Shop",
  "date": "October 06,2006",
  "Address": "1000 Lowes Blvd",
  "City": "Mooresville",
  "State": 34,
  "Zipcode": 28117,
  "Phone": "(800) 445-6937",
  "Fax": "(800) 445-6938",
  "Website": "http://www.nowebsitescreenshop.com"
}];

export class State {
  ID: number;
  Name: string;
}

let states: State[] = [{
  "ID": 1,
  "Name": "Alabama"
}, {
  "ID": 2,
  "Name": "Alaska"
}, {
  "ID": 3,
  "Name": "Arizona"
}, {
  "ID": 4,
  "Name": "Arkansas"
}, {
  "ID": 5,
  "Name": "California"
}, {
  "ID": 6,
  "Name": "Colorado"
}, {
  "ID": 7,
  "Name": "Connecticut"
}, {
  "ID": 8,
  "Name": "Delaware"
}, {
  "ID": 9,
  "Name": "District of Columbia"
}, {
  "ID": 10,
  "Name": "Florida"
}, {
  "ID": 11,
  "Name": "Georgia"
}, {
  "ID": 12,
  "Name": "Hawaii"
}, {
  "ID": 13,
  "Name": "Idaho"
}, {
  "ID": 14,
  "Name": "Illinois"
}, {
  "ID": 15,
  "Name": "Indiana"
}, {
  "ID": 16,
  "Name": "Iowa"
}, {
  "ID": 17,
  "Name": "Kansas"
}, {
  "ID": 18,
  "Name": "Kentucky"
}, {
  "ID": 19,
  "Name": "Louisiana"
}, {
  "ID": 20,
  "Name": "Maine"
}, {
  "ID": 21,
  "Name": "Maryland"
}, {
  "ID": 22,
  "Name": "Massachusetts"
}, {
  "ID": 23,
  "Name": "Michigan"
}, {
  "ID": 24,
  "Name": "Minnesota"
}, {
  "ID": 25,
  "Name": "Mississippi"
}, {
  "ID": 26,
  "Name": "Missouri"
}, {
  "ID": 27,
  "Name": "Montana"
}, {
  "ID": 28,
  "Name": "Nebraska"
}, {
  "ID": 29,
  "Name": "Nevada"
}, {
  "ID": 30,
  "Name": "New Hampshire"
}, {
  "ID": 31,
  "Name": "New Jersey"
}, {
  "ID": 32,
  "Name": "New Mexico"
}, {
  "ID": 33,
  "Name": "New York"
}, {
  "ID": 34,
  "Name": "North Carolina"
}, {
  "ID": 35,
  "Name": "Ohio"
}, {
  "ID": 36,
  "Name": "Oklahoma"
}, {
  "ID": 37,
  "Name": "Oregon"
}, {
  "ID": 38,
  "Name": "Pennsylvania"
}, {
  "ID": 39,
  "Name": "Rhode Island"
}, {
  "ID": 40,
  "Name": "South Carolina"
}, {
  "ID": 41,
  "Name": "South Dakota"
}, {
  "ID": 42,
  "Name": "Tennessee"
}, {
  "ID": 43,
  "Name": "Texas"
}, {
  "ID": 44,
  "Name": "Utah"
}, {
  "ID": 45,
  "Name": "Vermont"
}, {
  "ID": 46,
  "Name": "Virginia"
}, {
  "ID": 47,
  "Name": "Washington"
}, {
  "ID": 48,
  "Name": "West Virginia"
}, {
  "ID": 49,
  "Name": "Wisconsin"
}, {
  "ID": 50,
  "Name": "Wyoming"
}, {
  "ID": 51,
  "Name": "North Dakota"
}];