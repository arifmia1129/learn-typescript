type NoobDeveloper ={
    name:string
};

type JuniorDeveloper = NoobDeveloper & {
    expertise:string[],
    experience:number
};

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExp:number,
    level:string
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name:"Arif",
    expertise:["Javascript", "React", "Node", "Express", "MongoDB"],
    experience:1.5
};

enum Level{
junior="Junior",
mid="Mid",
senior="Senior"
};

const nextLevelDeveloper:NextLevelDeveloper = {
    name:"Arif",
    expertise:["Javascript", "Typescript", "React", "Next JS", "Redux", "Node", "Express", "MongoDB"],
    experience:2,
    leadershipExp:1,
    level:Level.mid
}