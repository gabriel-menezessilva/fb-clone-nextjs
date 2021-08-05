import StoryCard from "./StoryCard"

const stories = [
    {
        name: 'Warren Buffet',
        src: 'https://storage.googleapis.com/wp-noticias/2020/08/5476fb9b-104485369-sites-default-files-images-104451551-rts15ez0.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Warren_Buffett_KU-crop,flip.jpg'
    },
    {
        name: 'Elon Musk',
        src: 'https://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk'
    },
    {
        name: 'Jeff Bezos',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p'
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf'
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy'
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3
        mx-auto">
            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src}
                    profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
