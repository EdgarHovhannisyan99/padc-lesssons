// class Director {
//     name!: string
//     surname!: string
//     managers: Managers[] = []
//     constructor(name: string, surname: string) {
//         this.name = name
//         this.surname = surname
//     }
//
//     public setManagers(manager: Managers) {
//         this.managers.push(manager)
//     }
//
//     public getManagers(): Managers[] {
//         return this.managers
//     }
//
//     public getProjects() {
//         let projects = []
//         for(let i = 0; i < this.managers.length; i++){
//             projects.push(this.managers[i].projects)
//         }
//         return projects
//     }
//
// }
//
//
// class Managers {
//     name!: string
//     surname!: string
//     projects: Projects[] = []
//
//     constructor(name: string, surname: string) {
//         this.name = name
//         this.surname = surname
//     }
//
//     public setProjects(project: Projects) {
//         this.projects.push(project)
//     }
//
//     public getProjects() {
//         return this.projects
//     }
// }
//
//
// class Projects {
//     projectName!: string
//     teamLeads: TeamLead[] = []
//
//     constructor(name: string) {
//         this.projectName = name
//     }
//
//     public setTeamLead(lead: TeamLead) {
//         this.teamLeads.push(lead)
//     }
//
//     public getTeamLeads() {
//         return this.teamLeads
//     }
//
// }
//
//
// class TeamLead {
//     name!: string
//     surname!: string
//     developers: Developer[] = []
//
//     constructor(name: string, surname: string) {
//         this.name = name
//         this.surname = surname
//     }
//
//     public setDevelopers(developer: Developer) {
//         this.developers.push(developer)
//     }
//
//     public getDevelopers() {
//         return this.developers
//     }
//
// }
//
// class Developer {
//     name!: string
//     surname!: string
//
//     constructor(name: string, surname: string) {
//         this.name = name
//         this.surname = surname
//     }
// }
//
// const developer_1 = new Developer('developer_1', 'dev_1')
// const developer_2 = new Developer('developer_2', 'dev_2')
// const teamLead_1 = new TeamLead('team_1', 'teamLead_1')
// const teamLead_2 = new TeamLead('team_2', 'teamLead_2')
// const project_1 = new Projects('project_1')
// const project_2 = new Projects('project_2')
// const manager_1 = new Managers('manager_1', 'man_1')
// const director = new Director('director', 'direct')
//
// teamLead_1.setDevelopers(developer_2)
// teamLead_2.setDevelopers(developer_1)
// project_1.setTeamLead(teamLead_1)
// project_2.setTeamLead(teamLead_2)
// manager_1.setProjects(project_1)
// manager_1.setProjects(project_2)
// director.setManagers(manager_1)
//
// console.log(director.getProjects())


// recursive fibonacci
function fib(value: number): number {
    // if(value === 0) {
    //     return 0
    // }
    if (value < 2) {
        return 1
    } else {
        return fib(value - 1) + fib(value - 2)
    }
}
console.log(fib(3))