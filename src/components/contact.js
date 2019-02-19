import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Luis Cuzquen</h2>
            <img
              src="https://media.licdn.com/dms/image/C5603AQFZmk8ezJ2fgA/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=y4kws1WuhE7ZC3u3i-nz7oWRv9rArD9uqDCZPwFhdb8"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A talented developer with a passion for editing programs, web design, graphic design, and building computers. I have a solid foundation in social media marketing, leveraging social media to accomplish business goals, sales and networking.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:'25px'}}/>
                    (480) 710-6132
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:'25px'}}/>
                    cuzquenjr@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true" style={{fontSize:'25px'}}/>
                    cuzqulu
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;