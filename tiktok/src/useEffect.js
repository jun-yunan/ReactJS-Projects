import { useEffect, useState } from "react"

/*
1. update dom
*/

const tabs = ["posts", "comments", "albums"]
function Content() {
    //1. useEffect(callback)
        // - Gọi callback mỗi khi component re-render
        // - Gọi callback sau khi component thêm element vào DOM
    //2. useEffect(callback. [])
        // - Chỉ gọi callback một lần sau khi component mounted
    //3. useEffect(callback, [deps])
        // - Callback sẽ được gọi lại mỗi khi deps thay đổi

    //-------------------------
    //1. Callback luôn được gọi sau khi component mounted
    //2. Cleanup function luôn được gọi trước khi component unmounted

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        //vd1 document.title = title

        //vd2 fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(posts => {
        //         setPosts(posts)
        //     })

        //vd3
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })


    }, [type])

    return (
        <div>

            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content