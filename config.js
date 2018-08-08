'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'YTNBAIGFVMM6775WFFKYP32JDE3BHCOZ'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAGI9ncKQxgBAId2DD1fSohvkGmrBGCe2M3xD4SRdWhQ6YG99rpMgE2ZCA4pAMZBbUEKLr1ZCYo03qwQfAvxMouEy0dEiUTWVoq9THVUm1UuUpvQbo5Aa2aX2P7vyCX4HXlTZCeoNpqHecqfrTBUeBuUmJtuQ2NJXq1t3dMR2YgvyA7auZCg1'
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}