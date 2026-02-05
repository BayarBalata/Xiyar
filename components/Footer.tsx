import Link from 'next/link';

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
    <div className="flex flex-col space-y-2">
        <h4 className="font-semibold text-xs text-gray-900 mb-1">{title}</h4>
        <ul className="flex flex-col space-y-2">
            {links.map(link => (
                <li key={link}>
                    <Link href="/" className="text-xs text-gray-500 hover:underline">
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-[#f5f5f7] py-10 px-4 text-xs">
            <div className="max-w-[1024px] mx-auto">
                <div className="border-b border-gray-300 pb-6 text-gray-500 space-y-3">
                    <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
                    <div className="space-y-6">
                        <FooterColumn title="Shop and Learn" links={['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']} />
                        <FooterColumn title="Xiyar Wallet" links={['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']} />
                    </div>
                    <div className="space-y-6">
                        <FooterColumn title="Account" links={['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']} />
                        <FooterColumn title="Entertainment" links={['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']} />
                    </div>
                    <div className="space-y-6">
                         <FooterColumn title="Xiyar Store" links={['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']} />
                    </div>
                    <div className="space-y-6">
                        <FooterColumn title="For Business" links={['Apple and Business', 'Shop for Business']} />
                        <FooterColumn title="For Education" links={['Apple and Education', 'Shop for K-12', 'Shop for College']} />
                        <FooterColumn title="For Healthcare" links={['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone']} />
                        <FooterColumn title="For Government" links={['Shop for Government', 'Shop for Veterans and Military']} />
                    </div>
                    <div className="space-y-6">
                        <FooterColumn title="Xiyar Values" links={['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility']} />
                        <FooterColumn title="About Xiyar" links={['Newsroom', 'Xiyar Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Xiyar']} />
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-gray-500">
                    <div className="mb-2 md:mb-0">
                        <p>Copyright © 2024 Xiyar Inc. All rights reserved.</p>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <Link href="/" className="hover:underline">Privacy Policy</Link>
                        <span className="border-r border-gray-400 h-3 my-auto"></span>
                        <Link href="/" className="hover:underline">Terms of Use</Link>
                        <span className="border-r border-gray-400 h-3 my-auto"></span>
                        <Link href="/" className="hover:underline">Sales and Refunds</Link>
                        <span className="border-r border-gray-400 h-3 my-auto"></span>
                        <Link href="/" className="hover:underline">Legal</Link>
                        <span className="border-r border-gray-400 h-3 my-auto"></span>
                        <Link href="/" className="hover:underline">Site Map</Link>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <Link href="/" className="hover:underline">United States</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
