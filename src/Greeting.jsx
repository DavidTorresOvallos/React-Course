export function Greeting({title,name = "User"}) {
    console.log(title)
    return <h1>{title}, dice {name}</h1>
}  

export function UserCard(){
    return <h1>User Card</h1>
}