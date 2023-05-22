import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../assets/services/image-url'


const GenreList = () => {
    const { genres, isLoading, error } = useGenres()
    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {genres.map(genre => <ListItem paddingY="5px" key={genre.id}><HStack>
                <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                <Text fontSize="lg">{genre.name}</Text>
            </HStack></ListItem>)}
        </List>
    )
}

export default GenreList