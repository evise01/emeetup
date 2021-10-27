import Link from "next/link"
import {AppBar, Tab, Tabs} from "@mui/material";
import {useRouter} from "next/router";
import {useState} from "react";


function MainNavigation() {
    const router = useRouter()

    // -- States --
    const [value, setValue] = useState(1)

    // -- Handlers --
    const changeHandler = (e, newValue) => {
        setValue(newValue)
    }

    const allMeetupClickHandler = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const newMeetupClickHandler = (e) => {
        e.preventDefault()
        router.push('/new-meetup')
    }

    return (
        <header>
            <AppBar position={'static'}>
                <Tabs
                    sx={{
                        margin: '0 4rem',
                        gap: '1rem',
                    }}
                    value={value}
                    onChange={changeHandler}
                    textColor={'inherit'}
                    indicatorColor={'secondary'}
                >
                    <Tab
                        sx={{
                            opacity: '0.75 !important',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                        }}
                        label={'E-Meetup'}
                        disabled
                    >
                        E-Meetup
                    </Tab>
                    <Tab onClick={allMeetupClickHandler} href={'/'} label={'All Meetups'}/>
                    <Tab onClick={newMeetupClickHandler} href={'/new-meetup'} label={'Add New Meetup'}/>
                </Tabs>
            </AppBar>
        </header>
    );
}

export default MainNavigation;
