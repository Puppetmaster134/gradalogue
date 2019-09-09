

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1)
    }
}));



export default function Header()
{
    const classes = useStyles();

    return (
        <div>
            <Link href="/">
                <a className={classes.button}>
                    Home
                </a>
            </Link>

            <Link href="/search">
                <a className={classes.button}>
                    Search
                </a>
            </Link>


        </div>
    )
}
