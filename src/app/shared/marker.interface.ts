export interface marker {
    active: Boolean;
    coords: {
        lat: Number;
        lng: Number;
    }
    pay: {
        paymeans?: {
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
        days?: [
             {mon:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{tue:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{wed:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{thu:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{fri:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sat:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sut:{activeDay: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
        ]
    }
    style?: {
        animation: string;
    }
    rating?: [
        {user: string; title: string; desc: string; rate: number;}
    ]
    other?: {

    }
}