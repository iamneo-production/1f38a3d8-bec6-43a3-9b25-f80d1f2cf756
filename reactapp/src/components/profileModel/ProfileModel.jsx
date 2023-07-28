import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core'

const ProfileModel = ({modelOpen, setModelOpen}) => {
    const theme = useMantineTheme()
  return (
    <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayblur={3}
        size='55%'
        opened={modelOpen}
        onClose={() => setModelOpen(false)}
    >
        <form className='InfoForm' action="">
            <h3>Your Info</h3>
            <input className="InfoInput" type="text" name='username' placeholder='Username' />
            <input className="InfoInput" type="email" name='email' placeholder='Email' />
            <input className="InfoInput" type="date" name='dateOfBirth' placeholder='Date of Birth' />
            <div>
                Profile Image
                <input type="file" name='profileImg' />
                Cover Image
                <input type="file" name='coverImg' />
            </div>
            <button className="button InfoButton" type="button">Update</button>
        </form>
    </Modal>
  )
}

export default ProfileModel
