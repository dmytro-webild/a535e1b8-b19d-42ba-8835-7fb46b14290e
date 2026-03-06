"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Sparkles, Star, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Rainier's Labs"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Rainier's Labs"
          description="Exceptional specialty coffee crafted with passion and precision. Experience the art of coffee at its finest."
          buttons={[
            { text: "Visit Us Today", href: "#contact" },
            { text: "Explore Menu", href: "#menu" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-barista-hands-preparing-coffee-customer-coffee-shop_93675-134687.jpg"
          imageAlt="Artisan coffee being prepared"
          mediaAnimation="blur-reveal"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          title="Crafting the Perfect Cup Since 2015"
          description="Rainier's Labs was founded on the belief that exceptional coffee comes from passion, precision, and the finest quality beans."
          subdescription="We partner with specialty coffee roasters and direct trade farmers to bring you the most exceptional coffee experience."
          icon={Coffee}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-barista-hands-preparing-coffee-customer-coffee-shop_93675-134687.jpg"
          imageAlt="Coffee craftsmanship"
          mediaAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Specialty Coffee Collection"
          description="Discover our handpicked selection of premium coffee beverages, each crafted to perfection by our expert baristas."
          tag="Menu"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Signature Espresso",              price: "$3.95",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-coffee-cocktail-with-ice-coffee-seeds-grey-desk-drink-juice-cocktail_140725-25965.jpg",              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",              name: "Silky Cappuccino",              price: "$4.95",              imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-foam-flower_1203-1629.jpg",              imageAlt: "Perfect cappuccino with latte art"
            },
            {
              id: "3",              name: "Cold Brew",              price: "$4.50",              imageSrc: "http://img.b2bpic.net/free-photo/cold-summer-coffee-drink-with-ice-orange-juice_169016-21399.jpg",              imageAlt: "Smooth cold brew coffee"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Join hundreds of satisfied coffee lovers who trust Rainier's Labs for their daily ritual."
          tag="Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Martinez",              role: "Regular Customer",              testimonial: "The espresso here is absolutely phenomenal. The baristas truly understand coffee craftsmanship. I've been coming here for three years and never had a bad cup.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3APZxmPw1SXapYImZaEdE0dbdPZ/uploaded-1772786005075-n7e44jh9.jpg",              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",              name: "James Chen",              role: "Coffee Enthusiast",              testimonial: "Rainier's Labs has perfected the art of specialty coffee. Every drink is a work of art. The atmosphere is warm and inviting. Highly recommended!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3APZxmPw1SXapYImZaEdE0dbdPZ/uploaded-1772786011963-0vz4idrp.jpg",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Office Manager",              testimonial: "We order for our team meetings every Friday. The consistency and quality are unmatched. Your baristas truly care about every cup they make.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3APZxmPw1SXapYImZaEdE0dbdPZ/uploaded-1772786016120-tohm1764.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Michael Thompson",              role: "Writer",              testimonial: "I've tried coffee shops across the city, and this is hands down the best. The attention to detail and premium beans make all the difference.",              imageSrc: "http://img.b2bpic.net/free-photo/person-indian-origin-having-fun_23-2150285283.jpg?id=40125625",              imageAlt: "Michael Thompson"
            },
            {
              id: "5",              name: "Lisa Wang",              role: "Designer",              testimonial: "Perfect spot to work or meet friends. The coffee is exceptional, and the vibe is inspiring. Can't imagine my mornings without Rainier's Labs.",              imageSrc: "http://img.b2bpic.net/premium-photo/man-portrait-happy-studio-business-relax-confidence-employee-designer-creative-staff-male-person-startup-worker-with-pride-company-job-grey-background_590464-334022.jpg?id=210120801",              imageAlt: "Lisa Wang"
            },
            {
              id: "6",              name: "David Patel",              role: "Entrepreneur",              testimonial: "This is more than a coffee shop—it's a community. The baristas remember your order, and you can taste the passion in every cup. Truly exceptional.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=6",              imageAlt: "David Patel"
            }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Visit Rainier's Labs Today"
          description="Stop by our café to experience exceptional coffee. We're open daily with a welcoming atmosphere perfect for your coffee moments."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cute-stylish-family-summer-city_1157-19953.jpg"
          imageAlt="Rainier's Labs café storefront"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Location",              items: [
                { label: "Main Café", href: "#" },
                { label: "Downtown Branch", href: "#" },
                { label: "Get Directions", href: "#" }
              ]
            },
            {
              title: "Menu",              items: [
                { label: "Espresso Drinks", href: "#menu" },
                { label: "Cold Brew", href: "#menu" },
                { label: "Specialty Items", href: "#menu" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Rainier's Labs. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}