import React from 'react'
import '../utilities/CSS/navbar.css'
import { a } from 'react-router-dom'

export default function Footer() {
  return (
  <div class="  container text-white full_footer">
   <footer class="py-5">
    <div class="row row_footer ">
      <div class="col-6 col-md-2 mb-3">
        <h5>THE BASICS</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About Company</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact Assistant</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">API</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Suppoort Forum</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">System Status</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>QUICK LINK</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact Us</a></li>
          <li class="nav-item mb-2"><a href="/popularmovies" class="nav-link p-0 text-white">Popular Movies</a></li>
          <li class="nav-item mb-2"><a href="/ontv" class="nav-link p-0 text-white">TVShow</a></li>
          <li class="nav-item mb-2"><a href="/popularpeople" class="nav-link p-0 text-white">Actor Popular</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>LEGAL</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Terms of Use</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">API Terms of Use</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Privacy Policy</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">DMCA Takedown</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our Discussion</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
          <ul class="list-unstyled d-flex mt-2 icon_css">
              <li class="ms-3"><a class="link-secondary mx-2" to='/'><i class="fa-brands fa-instagram"></i></a></li>
              <li class="ms-3"><a class="link-secondary mx-2" to='/'><i class="fa-brands fa-facebook"></i></a></li>
              <li class="ms-3"><a class="link-secondary mx-2" to='/'><i class="fa-brands fa-twitter"></i></a></li>
              <li class="ms-3"><a class="link-secondary mx-2" to='/'><i class="fa-brands fa-github"></i></a></li>
          </ul>
        </form>
      </div>
    </div>
  </footer>
</div>
  )
}
