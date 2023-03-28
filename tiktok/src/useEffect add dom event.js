import { useEffect } from "react";
import { useState } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content1() {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('posts')
    const [datas, setDatas] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        console.log(type)
        //call api
        fetch (`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => setDatas(datas))

    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            }
            else {
                setShowGoToTop(false)
            }
            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener')

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener')
        }
    }, [])

    return (
        <div>
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    style={tab === type ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    }:{}}
                    onClick={() => {
                        return setType(tab)
                    }}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {datas.map((data) => (
                    <li key={data.id}>{data.title || data.name}</li>
                ))}
            </ul>

            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            {showGoToTop && (
                <button 
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content1