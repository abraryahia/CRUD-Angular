import { Department } from "./department";

export class Student {

    // constructor(public id:number , public pname:string , public age:number){

    // }
    //  print(): void {
    //      console.log(`id = ${this.id} , name = ${this.pname} , age = ${this.age}`)
    // }
    // set Name( _name:string){
    //     this.pname =_name;
    // }
    // set ID( _id : number){
    //     this.id =_id;
    // }
    // set Age( _age:number){
    //     this.age =_age;
    // }
    // get Name( ):string{
    //     return this.pname ;
    // }
    // get ID( ):number{
    //     return this.id ;
    // }
    // get Age( ):number{
    //     return this.age ;
    // }

   constructor(public _id : number , public Name:string  , public Email : string , public Department ?:number)
   {
       
   }



}
