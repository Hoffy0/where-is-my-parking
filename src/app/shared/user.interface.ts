export interface User {
    uid:           string;
    displayName:   string;
    email:         string;
    rut?:          string;
    lessee?:       Boolean;
    emailVerified: Boolean;

}