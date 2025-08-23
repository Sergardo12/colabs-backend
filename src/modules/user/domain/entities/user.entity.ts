import { UserGender, UserRole, UserStatus } from "./enums/user.enum";

export class User{
    private readonly id: number;
    public email: string;
    private password: string; // aqui ya guardamos el hash, no el raw password
    public imageProfile: string;
    public role: UserRole;
    public name: string;
    public lastName: string;
    public phoneNumber: string;
    public dateOfBirth: Date;
    public gender: UserGender;
    public registrationDate: Date;
    public status: UserStatus;

    constructor(
        {id, 
        email, 
        password, // este valor ya debe venir hasheado desde la capa de aplicacion
        imageProfile, 
        role, 
        name, 
        lastName, 
        phoneNumber, 
        dateOfBirth,
        gender,
        registrationDate,
        status = UserStatus.ACTIVE}:
        {
            id: number,
            email: string,
            password: string, // este ya es un hash
            imageProfile: string,
            role: UserRole,
            name: string,
            lastName: string,
            phoneNumber: string,
            dateOfBirth: Date, 
            gender: UserGender,
            registrationDate: Date,
            status?: UserStatus     
        }){
            this.id = id;
            this.setEmail(email);
            this.password = password; // guardamos el hashm, no el raw password
            this.imageProfile = imageProfile;
            this.role = role;
            this.setName(name);
            this.setLastName(lastName);
            this.phoneNumber = phoneNumber;
            this.dateOfBirth = dateOfBirth;
            this.gender = gender;
            this.registrationDate = registrationDate;
            this.status = status;
        }
        // --- GETTERS ---
      public getId(): number {
        return this.id;
      }

      public getEmail(): string {
        return this.email;
      }

      public getName(): string {
        return this.name;
      }

      public getLastName(): string {
        return this.lastName;
      }

   /**
   * ⚠️ Devuelve el hash de la contraseña.
   * Uso exclusivo de infrastructure (ORM / repositorios).
   * Nunca usarlo en application ni presentation.
   */
    protected getPasswordHash(): string {
    return this.password;
  }

  // nunca expongas getPassword() => seguridad ⚠️

  // --- SETTERS ---
  public setEmail(email: string): void {
    if (!email.includes("@")) throw new Error("Invalid email address");
    this.email = email;
  }

  public setName(name: string): void {
    if (!name.trim()) throw new Error("Name cannot be empty"); 
    this.name = name;
  }

  public setLastName(lastName: string): void {
    if (!lastName.trim()) throw new Error("Last name cannot be empty");
    this.lastName = lastName;
  }

  //No recibe el raw, solo el hash
  public setPasswordHash(passwordHash: string): void {
    this.password = passwordHash; 
  }
   /**
   * Método especial para infrastructure.
   * Permite acceder al hash al mapear hacia ORM.
   */
    public static extractPasswordHash(user: User): string {
      return user.getPasswordHash();
    }

    //static
    //User.extractPasswordHash(user)

    //const user = new User(...)
    //user.getPasswordHash() // no permitido
  

}