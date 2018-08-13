
export class TechSkill {
    public name:string;
    public iconPath:string;

    constructor(skill:any){
        this.name = skill["name"];
        this.iconPath = skill["iconPath"];
    }
}