export interface User {
    uid:           String;
    displayName:   String;
    email:         String;
    rut?:          String;
    lessee?:       Boolean;
    emailVerified: Boolean;

}