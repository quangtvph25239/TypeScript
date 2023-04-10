import { useLocalStorage } from "../hooks"


const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px] ml-[90px]" src="/logo.png" alt="" />
            <input className="w-[1050px] rounded-2xl" type="text" placeholder="Search"/>
            <a href="/signin">Login</a>
            <p className="text-white">Xin chào: {user && user.lastName}</p>
        </div>
    </header>
}

export default UserHeader
