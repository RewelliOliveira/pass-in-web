import rewIcon from '../components/assets/rew-icon.svg'
export function Header(){
    return(
        <div>
        <img src={rewIcon} />
        <button className='bg-black'>OOOOOOOOOOOOOO</button>
        <nav>
            <a href="">Events</a>
            <a href="">Participants</a>
        </nav>
        </div>
    )
}