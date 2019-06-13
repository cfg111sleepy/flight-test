import React, { useState } from 'react'
import Notification  from 'react-web-notification'
import NotificationButton from '../../components/NotificationButton/NotificationButton'

const NotifacationComponent = ({ date }) => {

    const [ ignore, setIgore ] = useState(false)
    const [ title, setTitle ] = useState('')

    function playSound() {
        document.getElementById('sound').play();
    }

    const handlePermissionGranted = () => {
        setIgore(false)
    }

    const handlePermissionDenied = () => {
        setIgore(true)
    }

    const handleNotSupported = () => {
        setIgore(true)
    }

    const handleNotificationOnShow = () => {
        playSound();
    }

    const handleButtonClick = () => {

        if(ignore) {
          return null
        }
        setTitle(`taaaaxi ${date}`)
    }   

    return  <div>
                <NotificationButton onClick={handleButtonClick}>Notif!</NotificationButton>
                <Notification
                    ignore={ignore && title !== ''}
                    notSupported={handleNotSupported}
                    onPermissionGranted={handlePermissionGranted}
                    onPermissionDenied={handlePermissionDenied}
                    onShow={handleNotificationOnShow}
                    timeout={5000}
                    title={title}
                />
                <audio id='sound' preload='auto'>
                    <source src='./sound.mp3' type='audio/mpeg' />
                    <source src='./sound.ogg' type='audio/ogg' />
                    <embed  src='./sound.mp3' />
                </audio>
            </div>
}

export default NotifacationComponent
