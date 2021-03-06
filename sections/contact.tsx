import ContactForm from '../components/ContactForm'
import Container from '../components/Container'
import Section from '../components/Section'

function Contact() {
    return (
        <Section id='Contact'>
            <Container>
                <h2 className='text-center'>Contact Us</h2>
                <p className="text-center">Want to work with us on the next exciting product? Fill in the details or email at
                    <a className='font-bold text-green-600 ' href='mailto:hello@zero-1.studio'> hello@zero-1.studio</a>
                </p>
                <div className='flex justify-center'>
                    <ContactForm />
                </div>
            </Container>
        </Section>
    )
}

export default Contact