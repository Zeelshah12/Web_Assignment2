# Assignment_2 - BuyBAY

Application URL: https://csci5709-a2-shah-zeel.herokuapp.com/ <br/>
GitHub URL: https://github.com/Zeelshah12/Web_Assignment2 <br/>
Developed Home page(Landing Page), Sign Up Page, View Properties Page and Blog. "BuyBAY" link will redirect to Home Page.<br/> 
On click of "Register" -> Sign Up form<br/>
On click of "View Properties" -> User can check all the listed properties<br/>
On click of "Blog" -> User can view latest related post along with its rating<br/>


* Date Created: 10 June 2020
* Last Modification Date: 14 June 2020

## Description
Buybay website is to help users to find rental properties according to their requirements like type, number of bedrooms, furnishing, location, and rent. Users can also search for roommate, and the contact details as per the best match will be provided to them. Users will be notified for any new posting added in the website, which will be helpful for their future reference.  

## Author

* [Zeel Shah](zeel.shah@dal.ca)

## Deployment

Deployed on Heroku
###  In Heroku
* Landing page - https://csci5709-a2-shah-zeel.herokuapp.com/
* Register page - https://csci5709-a2-shah-zeel.herokuapp.com/sign-up
* View Properties page - https://csci5709-a2-shah-zeel.herokuapp.com/viewproperties
* Blog - https://csci5709-a2-shah-zeel.herokuapp.com/blog

## Prerequisites
Run the following command  for installing npm

### `npm install`

Following react dependencies were used:
react-bootstrap
react-router-dom

## Installing

1. Clone the repository from git - "https://github.com/Zeelshah12/Web_Assignment2.git"

2. Import the project in your IDE

3. After installing the dependencies, run the following command in terminal of project directory
`npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Usage Instructions

The above mentioned pages are responsive. Clicking on any other option will redirect to "Development in Progress" page.

## Built With

* [create-react-app] (https://create-react-app.dev/) - It generates development server, Webpack for bundling files, and Babel for compiling javascript code.
* [react-bootstrap] (https://react-bootstrap.github.io/) - It provides basic components for redering different layouts.

## Sources Used
Following components were used from react-bootstrap
* Carousel
* Navbar
* Card
* Alert
* Jumbotron
* Button 

The example of how these components were used is given below:

Home.js
Lines 14 - 38
---------------

```
<Carousel className="col-sm-8 mt-5" >
          <Carousel.Item>
           <img className="mt-20" src={logo}/>
          <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={image4}/>

        <Carousel.Caption>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
        <img  className="d-block w-100"  src={image3}/>
      
      <Carousel.Caption>
    
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

```
The code in [react-bootstrap] (https://react-bootstrap.github.io/)  was implemented by modifying the styling of Carousel.

```
<Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Third slide"/>
 <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide"/>
  <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
```

View.js
Lines 17 - 28
---------------

```
<Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>Example Property 1</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>

```

The code in [react-bootstrap] (https://react-bootstrap.github.io/)  was implemented by adding image and making it clickable to next page.

```
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

```

### Register.js

Lines 44-62
---------------

```
handleSubmit = e => {
    e.preventDefault();
     

    if (formValid(this.state)) {
      
      alert("Successful Registeration, Development is in Progress!")
      this.setState({redirecthome:true});
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID ");
    }
  };

```

The code above was created by adapting the code in [Form Validation - React] (https://www.educative.io/edpresso/react-form-validation) as shown below: 

```
 handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

```


- The code in [Form Validation - React] (https://www.educative.io/edpresso/react-form-validation) was modified by  using Regex to perdorm validations for input fields of First Name, last name, email id and password. The function handleSubmit is responsible to redirect to next page if all validations are correct.

### React Bootstrap components like Alert, Jumbotron, Button, Badge, Navbar were used  from [react-bootstrap] (https://react-bootstrap.github.io/), was modified according to styling and functionality requirements.  

## Images

### Home.js

- logo.jpg  [Source] - (https://www.crismatec.com/python/de/house-interior-background-hd-inspiration-home-design-and-decoration_home-elements-and-style.jpg)
- image3.jpg, image4.jpg [Source] - (http://www.crismatec.com/1533938911/mnc/9e4545b15925d770/)

###  View.js

- image2.jpg, image3.jpg, image4.jpg, iamge5.jpg, image6.jpg  [Source] - (http://www.crismatec.com/1533938911/mnc/9e4545b15925d770/)

###  Blog.js

- logo.jpg  [Source] - (https://www.crismatec.com/python/de/house-interior-background-hd-inspiration-home-design-and-decoration_home-elements-and-style.jpg)
