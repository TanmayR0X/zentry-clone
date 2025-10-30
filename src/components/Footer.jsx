import { FaDiscord, FaXTwitter, FaGithub, FaTwitch } from 'react-icons/fa6'

const links = [
  {href: 'https://discord.com', icon: <FaDiscord/>},
  {href: 'https://x.com', icon: <FaXTwitter/>},
  {href: 'https://github.com', icon: <FaGithub/>},
  {href: 'https://twitch.com', icon: <FaTwitch/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black px-4'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; 2025 Zentry. All rights reserved
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link, index) => (
            <a key={index} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-all duration-500 ease-in-out hover:text-white text-xl hover:scale-110'>{link.icon}</a>
          ))}
        </div>

        <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer