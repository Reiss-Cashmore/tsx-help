import SvgMapIcon, { getSvgMapIconProps, ISvgMapIconConsumerProps } from './SvgMapIcon';

export default function AlligatorIcon(props: ISvgMapIconConsumerProps) {
    const {
        stroke,
    } = getSvgMapIconProps(props);

    return <SvgMapIcon {...props}>
        <path
            d='M 8.1601562 4.0390625 C 6.9583103 4.0390625 6.5573936 4.2795169 4.1640625 6.4511719 C 1.7707315 8.6228269 -3.8769531 10.054688 -3.8769531 10.054688 L 1.5078125 10.054688 C 2.204854 9.4661851 2.184804 8.5 4 8.5 C 5.815196 8.5 5.795146 9.4661851 6.4921875 10.054688 L 9.5078125 10.054688 C 10.204854 9.4661851 10.184804 8.5 12 8.5 C 13.815196 8.5 13.795146 9.4661851 14.492188 10.054688 L 14.861328 10.054688 L 14.861328 5.5 L 12.873047 5.5 C 11.353434 5.5 10.448764 5.5970741 9.9140625 4.9765625 C 9.3793595 4.3560509 9.3620022 4.0390625 8.1601562 4.0390625 z '
            style={{ stroke: 'none' }}
        />
        <path
            d='m -3.8771441,10.055182 c 0,0 5.64716,-1.431458 8.040491,-3.603113 2.393331,-2.171655 2.7955618,-2.4139436 3.9974078,-2.4139436 1.201846,0 1.2187584,0.3179303 1.753461,0.9384419 C 10.448918,5.5970789 11.35381,5.5 12.873423,5.5 h 1.988671 v 4.555182'
            style={{ fill: 'none' }}
        />
        <path
            d='m 0,10.5 c 2.6,0 1.4,-2 4,-2 2.6,0 1.4,2 4,2 2.6,0 1.4,-2 4,-2 2.6,0 1.4,2 4,2'
            style={{ fill: 'none' }}
        />
        <path
            d='m 0,13.5 c 2.6,0 1.4,-2 4,-2 2.6,0 1.4,2 4,2 2.6,0 1.4,-2 4,-2 2.6,0 1.4,2 4,2'
            style={{ fill: 'none' }}
        />
        <path
            style={{ display: 'none' }}
            d='m 16.618726,23.14646 c 0,0 5.64716,-1.431458 8.040491,-3.603113 2.393331,-2.171655 2.967126,-2.452069 4.168972,-2.452069 1.201846,0 1.457042,0.06058 1.782055,0.5 0.325013,0.439416 1.239435,1 2.759048,1 h 1.988671 v 4.555182'
        />
        <circle
            r='1'
            cy='7'
            cx='9'
            style={{ fill: stroke, stroke: 'none' }}
        />
    </SvgMapIcon>;
}
