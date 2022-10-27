"use strict";
class Director {
    constructor(name, surname) {
        this.managers = [];
        this.name = name;
        this.surname = surname;
    }
    setManagers(manager) {
        this.managers.push(manager);
    }
    getManagers() {
        return this.managers;
    }
    getProjects() {
        let projects = [];
        for (let i = 0; i < this.managers.length; i++) {
            projects.push(this.managers[i].projects);
        }
        return projects;
    }
}
class Managers {
    constructor(name, surname) {
        this.projects = [];
        this.name = name;
        this.surname = surname;
    }
    setProjects(project) {
        this.projects.push(project);
    }
    getProjects() {
        return this.projects;
    }
}
class Projects {
    constructor(name) {
        this.teamLeads = [];
        this.projectName = name;
    }
    setTeamLead(lead) {
        this.teamLeads.push(lead);
    }
    getTeamLeads() {
        return this.teamLeads;
    }
}
class TeamLead {
    constructor(name, surname) {
        this.developers = [];
        this.name = name;
        this.surname = surname;
    }
    setDevelopers(developer) {
        this.developers.push(developer);
    }
    getDevelopers() {
        return this.developers;
    }
}
class Developer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
const developer_1 = new Developer('developer_1', 'dev_1');
const developer_2 = new Developer('developer_2', 'dev_2');
const teamLead_1 = new TeamLead('team_1', 'teamLead_1');
const teamLead_2 = new TeamLead('team_2', 'teamLead_2');
const project_1 = new Projects('project_1');
const project_2 = new Projects('project_2');
const manager_1 = new Managers('manager_1', 'man_1');
const director = new Director('director', 'direct');
teamLead_1.setDevelopers(developer_2);
teamLead_2.setDevelopers(developer_1);
project_1.setTeamLead(teamLead_1);
project_2.setTeamLead(teamLead_2);
manager_1.setProjects(project_1);
director.setManagers(manager_1);
console.log(director.getProjects());
