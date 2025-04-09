import React from 'react'
import "../css/Contact.scss"
const Contact = () => {
  return (
    <>

          <section id="contactus" class="section6">
              <div class="outside_grid_area">
                  <form class="grid_body_section6">
                      <div class="name hrflex">
                          <label for="name">Name</label>
                          <input type="text" id="name" placeholder="Enter your name" />
                      </div>

                      <div class="email hrflex">
                          <label for="email">Email</label>
                          <input type="email" id="email" placeholder="Enter your email" />
                      </div>

                      <div class="number hrflex">
                          <label for="number">Number</label>
                          <input type="text" id="number" placeholder="Enter your number" />
                      </div>

                      <div class="country hrflex">
                          <label for="country">Country</label>
                          <input
                              type="text"
                              id="countryform"
                              placeholder="Enter your country"
                          />
                      </div>

                      <div class="textarea hrflex">
                          <label for="message">Message</label>
                          <textarea
                              id="message"
                              placeholder="Enter your message"
                          ></textarea>
                      </div>

                      <button type="submit">Submit</button>
                  </form>
              </div>
          </section>

   


    </>
  )
}

export default Contact