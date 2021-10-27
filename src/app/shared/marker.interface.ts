export interface Marker {
    coords: {
        lat: string;
        lng: string;
    }
    pay: {
        payMeans: {
            CASH:   boolean;
            TC:     boolean;
            WALLET: boolean;
        }
        pay:      boolean;
        currency: string;
    }
    atribs: {
        title:       string;
        desc:        string;
        owner:       string;
        reservation: boolean;
        moneyBack:   boolean;
        days: [
             {mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
            ,{mon:{hours:{open: string; close: string;}; price:{minute:string; hour: string; day: string; month: string;}}}
        ]
    }
    style: {
        animation: string;
    }
    reting: [
        {user: string; title: string; desc: string; rate: number;}
    ]
    other: {

    }
}