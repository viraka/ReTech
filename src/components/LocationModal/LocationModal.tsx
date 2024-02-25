import * as Popover from '@radix-ui/react-popover';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const LocationModal = () => {
    const navigate = useNavigate();

    return (
        <div><Popover.Root>
            <Popover.Trigger asChild>
                <button >Get Search <IoSearch /></button>
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
                <Popover.Content>
                    <input type="text" />
                    <button onClick={() => navigate("/search")}>Search</button>
                    <Popover.Close asChild >
                        x
                    </Popover.Close>
                    <Popover.Arrow />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root></div>
    )
}

export default LocationModal