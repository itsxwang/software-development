import { useNavigate } from "react-router-dom";

function GotoLink() {

    const navigate = useNavigate();
    function handleclick(e: React.FormEvent<HTMLInputElement>): void {
        const target = e.target as HTMLInputElement;

        if (target.value.toLowerCase() === 'users') {
            navigate('/users', {
                state: {
                    users: target.value
                }
            })
        } else if (target.value.toLowerCase() === 'about') {
            navigate('/about')
        } else if (target.value.toLowerCase() === 'home' || target.value == '/') {
            navigate('/')
        }
        else if (target.value.toLowerCase() === 'joker') {
            console.log('joker')
            navigate('/joker',
                {
                    state: {
                        joker: target.value,
                        animals: 'red'
                    }
                })
        }
    }

    return (
        <div><input type="text" onChange={handleclick} /></div>
    )
}

export default GotoLink