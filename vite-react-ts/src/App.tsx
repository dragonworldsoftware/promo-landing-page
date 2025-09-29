import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SupportedBrands from './components/SupportedBrands/SupportedBrands'
import TextHeader from './components/TextHeader/TextHeader'
import TextParagraph from './components/TextParagraph/TextParagraph'
import SectionWrapper from './components/SectionWrapper/SectionWrapper'
import Divider from 'components/Divider/Divider'
import ToggleDropdown from './components/ToggleDropdown/ToggleDropdown'

function App() {
  const headerData = {
    logo: '/assets/logo.svg',
    brand: 'USA Software Leasing',
    nav: [
      { text: 'Home', link: '#home', isActive: true },
      { text: 'Services', link: '#services', isActive: false },
      { text: 'Register', link: '#register', isActive: false }
    ],
    button: { text: 'Sign In', link: '#signin' }
  }

  const brandsData = {
    text: "We've partnered with:",
    brands: [
      {
        image: 'tradingcom.png',
        alt: 'Trading.com'
      },
      {
        image: 'dragonworld.png',
        alt: 'Dragon World'
      },
      {
        image: 'metatrader5.png',
        alt: 'Meta Trader 5'
      },
      {
        image: 'aws.png',
        alt: 'Amazon Web Services'
      }
    ]
  }

  return (
    <div className="min-h-screen">
      <Header {...headerData} />

      {/* Hero */}
      <SectionWrapper bgColorLight="bg-white" bgColorDark="dark:bg-black">
        <Hero
          rating={4.9}
          heading="Expert consulting that drives real growth"
          desc="Elevate your business with expert insights, tailored strategies, and unwavering support designed to help you achieve your goals"
          btn1={{ text: 'Get in touch', link: '#contact' }}
          btn2={{ text: 'What we do', link: '#services' }}
          image="https://picsum.photos/500/400"
        />
      </SectionWrapper>

      {/* Brands */}
      <SectionWrapper
        bgColorLight="bg-gray-light"
        bgColorDark="dark:bg-green-header"
      >
        <div className="py-8"></div>
        <SupportedBrands {...brandsData} />
        <div className="py-8"></div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper bgColorLight="bg-white" bgColorDark="dark:bg-black">
        <div className="py-12">
          <TextHeader text="Our Mission" align="center" />
          <TextParagraph
            text="Through leasing our software, we hope to alleviate some of the financial burdens individuals and couples face on a daily basis, enabling them to enjoy a more fulfilling lifestyle. Our mission is to promote financial stability through a flexible and accessible means of earning money and to make a positive contribution to our community. This mission is further accomplished by requiring you to deposit 25% of your profit into a retirement fund for yourself and exercise 30 minutes 3 times a week. Your retirement and health are important to you and to us. We are empowering and supporting individuals through our platform who may not have access to traditional opportunities. We want to improve the lives of individuals with limited resources."
            align="center"
          />
        </div>
      </SectionWrapper>
      {/* Divider */}
      <SectionWrapper bgColorLight="bg-white" bgColorDark="dark:bg-black">
        <Divider
          colorLight="bg-green-primary/30"
          colorDark="dark:bg-yellow-primary/30"
        />
      </SectionWrapper>
      {/* Dropdown Collapsible */}
      <SectionWrapper bgColorLight="bg-white" bgColorDark="dark:bg-black">
        <TextHeader
          text="Got a question?"
          align="center"
          colorLight="text-green-header"
          colorDark="dark:text-yellow-primary"
        />
        <ToggleDropdown
          question={{ text: 'What is the Forex Market?' }}
          answer={{
            text: "When tourists go to different countries, they must exchange their dollars for pesos or pounds or francs or yen and all other currencies. Companies and governments also exchange huge amounts of dollars daily just like tourists do. The Forex Market is the largest financial market in the world trading over 5 trillion dollars per day. It is open 24 hours per day, 5 days a week with banks, institutions... It is fully regulated in the United States by The Commodity Futures Trading Commission (CFTC) and the National Futures Association (NFA). You can look these up in 2 Internet searches – 'What is CFTC' and 'What is NFA'."
          }}
        />
        <ToggleDropdown
          question={{ text: 'What is the Forex Market?' }}
          answer={{
            text: "When tourists go to different countries, they must exchange their dollars for pesos or pounds or francs or yen and all other currencies. Companies and governments also exchange huge amounts of dollars daily just like tourists do. The Forex Market is the largest financial market in the world trading over 5 trillion dollars per day. It is open 24 hours per day, 5 days a week with banks, institutions... It is fully regulated in the United States by The Commodity Futures Trading Commission (CFTC) and the National Futures Association (NFA). You can look these up in 2 Internet searches – 'What is CFTC' and 'What is NFA'."
          }}
        />
        <div className="py-8"></div>
      </SectionWrapper>
    </div>
  )
}

export default App
