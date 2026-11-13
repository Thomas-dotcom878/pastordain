// ============================================================
//  PLAYLISTS and SINGLE VIDEOS
// ============================================================
//  Each line is one thumbnail on the page, in the order shown
//  (left to right, top to bottom, 3 across).
//
//  To add one: copy a line, change the title, link and image,
//  and put the image file in  public/images/.
//
//  BLANK leaves an empty spot in the grid (the live site uses
//  these so the newest items sit where Dain wants them).
// ============================================================

export type GridItem =
  | { title: string; url: string; image: string }
  | 'BLANK';

const BLANK = 'BLANK' as const;

export const playlists: GridItem[] = [
  BLANK,
  { title: '2nd Corinthians', url: 'https://www.youtube.com/playlist?list=PLI3CjU0bulEU', image: '/images/playlist-2-corinthians.webp' },
  { title: 'Esther', url: 'https://www.youtube.com/playlist?list=PLkhbIpJXWLnsHKwpA1MCOHhQfzUbRR__h', image: '/images/playlist-esther.webp' },
  { title: 'Matthew', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnv011JLz54fGg0OZB5OQIQy&si=794nVvfguLYIk2uI', image: '/images/playlist-matthew.webp' },
  { title: 'Ezra-Nehemiah', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLns4NDtxkdsLoPRisbAL48AW&si=wOb-pawn2QVMuKeh', image: '/images/playlist-ezra-nehemiah.webp' },
  { title: 'Philippians', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnsMPcwKIbtKtq-pEHRdfvRl&si=rNVgLRdfuc0tlIlv', image: '/images/playlist-philippians.webp' },
  { title: 'Jonah', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnvOJd2-FUkfjuNbr1i0KIxq&si=dEFGY59HQMbMtpVF', image: '/images/playlist-jonah.webp' },
  { title: 'Galatians', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnvURQUqaoYmYSYnn74qMr1W&si=JeOwd1cx-sUwNekn', image: '/images/playlist-galatians.webp' },
  { title: 'Judges', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnvDJOsoDyBjZnrx88K696go&si=ssBxsq8RQIvttBQa', image: '/images/playlist-judges.webp' },
  { title: '1 John', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLntDz4AdZEllsfzlaFxx69iK&si=0MyxiYw5kRJuXQ4W', image: '/images/playlist-1-john.webp' },
  { title: 'Joshua', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnuD4sCMwohrDW_BZTbv6lxD&si=qwpIF6JuxI7cvuyG', image: '/images/playlist-joshua.webp' },
  { title: 'Apostles Creed', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLntsycxXxwC8zIxP5XVxKqLS&si=uCED1ww8-ORVfQd2', image: '/images/playlist-apostles-creed.webp' },
  { title: '1 Peter', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLntSZbBq9pLfTqQBrezdlOJO&si=Nep_afMdtZ_OpE8p', image: '/images/playlist-1-peter.webp' },
  { title: 'Hebrews', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnu4KoTm9G0t_DaYzUwRLmFY&si=JscvyH0t7aMbUFMX', image: '/images/playlist-hebrews.webp' },
  { title: 'Leviticus', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnseFxLEsKiWKq7G2uWjNTCk&si=2NQq7BlIwGmSNTbo', image: '/images/playlist-leviticus.webp' },
  { title: 'Acts', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnvIBY496SndKD9-qH29peE4&si=rVAPE49PfHp55jF7', image: '/images/playlist-acts.webp' },
  { title: 'Romans', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLntY6QBlEZhCQI_Av1UM4Jin&si=uri1_N9yttMiYmJO', image: '/images/playlist-romans.webp' },
  { title: 'The Lord’s Prayer', url: 'https://youtube.com/playlist?list=PLkhbIpJXWLnvZEh4-VUv-ZN4ppUy29yqa&si=gV0H_pyYSY4cfkko', image: '/images/playlist-lords-prayer.webp' },
];

export const singleVideos: GridItem[] = [
  BLANK,
  { title: 'Hearing the Voice of God', url: 'https://youtu.be/DRQUa-OzpOE', image: '/images/video-hearing-the-voice-of-god.webp' },
  BLANK,
  { title: 'The History of Conflict in Israel', url: 'https://youtu.be/mxhjtsBJ0_w', image: '/images/video-conflict-in-israel.webp' },
  { title: 'Jungle Jen – Amazon Missions', url: 'https://youtu.be/yWbjS6gIzhQ', image: '/images/video-amazon-missions.webp' },
  { title: 'Revelation – Jon Enns', url: 'https://youtu.be/DeIGcVq0Yjo', image: '/images/video-revelation.webp' },
  { title: 'The Best Community of All', url: 'https://youtu.be/YWdtByX6cDo', image: '/images/video-best-community.webp' },
  { title: 'The Reformation', url: 'https://youtu.be/ARKhLoDgm-g', image: '/images/video-reformation.webp' },
  { title: 'Christ in the Passover', url: 'https://youtu.be/rvuh5kdqyig', image: '/images/video-passover.webp' },
  { title: 'The Bible: How Did It Happen?', url: 'https://youtu.be/k46EnLGAY54', image: '/images/video-bible-history.webp' },
  { title: 'Ken Needham – The Apostle Paul: From Judaism to Christianity', url: 'https://youtu.be/fOuoBnvv1tM', image: '/images/video-ken-needham.webp' },
  { title: 'Church History: The First 2000 Years', url: 'https://youtu.be/0ylJVMywGY4', image: '/images/video-saturday-bible-school.webp' },
];
