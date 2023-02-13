import { GoLinkExternal } from 'react-icons/go';

const Post = ({ post, i }) => {

    const media = post['Post Media'];
    const date = new Date(post['Post Date']).toLocaleString();
    const title = post['Post Title'];
    const description = post['Post Description'];
    const link = post['Post Link']

    const layouts = `${media && 'md:grid-cols-2'}`;
    const colors = `${i % 2 ? 'bg-blue' : 'bg-lightpurple'} text-cream border-cream`;

    return (
        <div className={`grid gap-3 items-center justify-items-center p-3 ${layouts} ${colors}`}>
            { media && <img src={media} /> } 
            <div className="grid items-center justify-items-center">
                <h1 className="text-3xl text-center text-inherit font-['Kalivo']">Post Date: {date}</h1>
                { title && <h1 className="text-7xl text-center text-inherit font-['Elegante']">{title}</h1> }
                { description && <h1 className="text-5xl text-center text-inherit font-['Kalivo']">{description}</h1> }
                {link && <div className='flex border-inherit select-none hover:scale-[.98]'>
                    <div onClick={() => window.open(link, '_blank')} className="flex gap-1 h-[2rem] p-5 items-center border border-inherit rounded-lg">
                        <GoLinkExternal className='text-inherit' size="20px" />
                        <h1 className="text-3xl text-inherit font-['Kalivo'] self-center">Learn more</h1>
                    </div>
                </div> }
            </div>
        </div>   
    )
};

export default Post;