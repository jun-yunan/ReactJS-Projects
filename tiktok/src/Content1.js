import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content() {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('posts')
    const [datas, setDatas] = useState([])
    const [topPage, setTopPage] = useState(false)
    const [backTopPage, setBackTopPage] = useState()

    useEffect(() => {
        //call api
        fetch (`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => setDatas(datas))
        console.log(type)
    }, [type])

    useEffect(() => {
        document.title = title
        console.log(title)
    }, [title])


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setTopPage(true)
            }
            else {
                setTopPage(false)
            }
            console.log(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        console.log('add event scroll')
        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove event scroll')
        }
    }, [topPage])

    return (
        <div>
            {/* render mảng tabs ra giao diện */}
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    style={tab === type ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    }:{}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            {/* render api ra giao diện */}
            
            <ul>
                    {datas.map(data => (
                        <li key={data.id}>{data.title || data.name}</li>
                    ))}
            </ul>

            {/* render input ra giao diện */}
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                onBlur={(event) => setTitle(event.target.value = '')}
            />

            {topPage && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                    onClick={() => setBackTopPage(window.scrollY=0)}
                >
                    Top page
                </button>
            )}
        </div>
    )
}


export default Content