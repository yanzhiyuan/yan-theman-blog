
export class TechSkill {
    public name:string;
    public iconName:string;

    constructor(skill:any){
        this.name = skill["name"];
        this.iconName = skill["iconName"];
    }
}