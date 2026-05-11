import { createContext, useEffect, useState } from "react";
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'

import postImg from '../assets/images/post-img.png'


export const Context = createContext()

export const AuthContext = ({children}) => {
    const useLocalStore = (key, defaultValue) => {
        const [value, setValue] = useState(() => {
            try{
                const valueData = localStorage.getItem(key)
                return valueData ? JSON.parse(valueData) ?? defaultValue : defaultValue
            }
            catch(err){
                console.log(err);
                return defaultValue
            }
        })
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value))
        },[key,value])

        return [value,setValue]
    }

    const postList = [
        {
            id:1,
            icon:img1,
            title:'Designsta',
            user:'@inner · 25m',
            text:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
            comment:"10",
            reply:"1",
            like:'8',
            postImg:''
        },
        {
            id:2,
            icon:img2,
            title:'cloutexhibition',
            user:'@RajLahoti · 22m',
            text:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
            comment:false,
            reply:"5",
            like:'9',
            postImg:''
        },
        {
            id:3,
            icon:img3,
            title:'CreativePhoto',
            user:'@cloutexhibition · 1h',
            text:'Обетда..... Кечиринглар',
            comment:'10',
            reply:"1",
            like:'8',
            postImg:postImg
        }
    ]
    const [post, setPost] = useState(postList)
    

    const [user, setUser] = useLocalStore('user', [
        { id: 'admin', login: 'mohir', password: '123', role: 'admin' }
    ])
    const [token, setToken] = useLocalStore('token', null)
    const [name, setName] = useLocalStore('name', token?.login ?? '')

    const [dark,setDark] = useLocalStore('them', false)
    useEffect(() => {
        document.body.classList.toggle('dark', dark)
    },[dark])

    const [path, setPath] = useState('/')
    return (
        <Context.Provider value={{token, setToken, user, setUser, path, setPath, post, setPost, postList,name, setName, dark,setDark}}>
            {children}
        </Context.Provider>
    )
}