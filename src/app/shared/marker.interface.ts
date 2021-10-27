export interface marker {
    coords: {
        lat: string;
        lng: string;
    }
    pay: {
        paymeans: {
            cash:   boolean;
            tc:     boolean;
            wallet: boolean;
        }
        pay:      boolean;
        currency: string;
    }
    atribs: {
        title:       string;
        desc:        string;
        owner:       string;
        reservation: boolean;
        moneyback:   boolean;
        days: [
             {mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{tue:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{wed:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{thu:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{fri:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sat:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sut:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
        ]
    }
    style?: {
        animation: string;
    }
    reting?: [
        {user: string; title: string; desc: string; rate: number;}
    ]
    other?: {

    }
}