import Link from 'next/link';

import Popup from "reactjs-popup";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  }
}));


export default function Header()
{
    const classes = useStyles();

    return (
        <div>
          <Link href="/">
              <Button variant="contained" color="primary" className={classes.button}>
                  Home
              </Button>
          </Link>
          <Link href="/search">
              <Button variant="contained" color="primary" className={classes.button}>
                  Search
              </Button>
          </Link>
          <Popup
              trigger={() =>
              (
                  <Button variant="contained" color="primary" className={classes.button}>
                      Add New
                  </Button>
              )} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                  Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                  delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                  commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                  explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    closeOnDocumentClick
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                      magni omnis delectus nemo, maxime molestiae dolorem numquam
                      mollitia, voluptate ea, accusamus excepturi deleniti ratione
                      sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
    )
}
