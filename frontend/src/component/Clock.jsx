import { useClock } from 'react-use-clock';

export function Clock() {
    const MyClockComponent = () => {
        const clock = useClock();
    
        return (
            <div style={{width:'20vw',height:'10vh',color:'#283618'}}>
                Time is:{' '}
                <strong>
                    {clock.hours.toString().padStart(2, '0')}:
                    {clock.minutes.toString().padStart(2, '0')}:
                    {clock.seconds.toString().padStart(2, '0')}
                </strong>
                <div
                    style={{
                        '--hours': `${clock.hours}`,
                        '--minutes': `${clock.minutes}`,
                        '--seconds': `${clock.seconds}`,
                    }}
                />
            </div>
        );
    };
    
    return (
        <div>
            <MyClockComponent />
        </div>
    );
}
