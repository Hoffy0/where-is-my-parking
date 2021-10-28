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
             {mon:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{tue:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{wed:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{thu:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{fri:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sat:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{sut:{active: boolean; hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
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