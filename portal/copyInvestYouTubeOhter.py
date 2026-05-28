import json
import copy
import json
import datetime
from pyyoutube import Api
api = Api(api_key='...')

def get_isosplit(s, split):
    if split in s:
        n, s = s.split(split)
    else:
        n = 0
    return n, s

def parse_isoduration(s):
        
    # Remove prefix
    s = s.split('P')[-1]
    
    # Step through letter dividers
    days, s = get_isosplit(s, 'D')
    _, s = get_isosplit(s, 'T')
    hours, s = get_isosplit(s, 'H')
    minutes, s = get_isosplit(s, 'M')
    seconds, s = get_isosplit(s, 'S')

    # Convert to minutes
    return (int(hours) * 60 + int(minutes))

# read in a json file into the variable videos2 from C:\temp\git\clinicalOpenSourcePortal\videos\youtube_other.json
with open('C:\\temp\\git\\clinicalOpenSourcePortal\\videos\\youtube_other.json', encoding='utf-8') as json_file:
    videos = json.load(json_file) 

group = "Other"
playlist = []

for item in videos:
    # Video Information
    videoId = item['videoId']
    video_by_id = api.get_video_by_id(video_id=videoId,parts='snippet,statistics,contentDetails')
    video = {}

    # if there is a private video, ignore this
    if (len(video_by_id.items) > 0):
        video["group"] = group
        video["videoId"] = videoId
        video["title"] = video_by_id.items[0].snippet.title
        video["description"] = video_by_id.items[0].snippet.description
        video["publishedAt"] = video_by_id.items[0].snippet.publishedAt[0:10]
        video["duration"] = parse_isoduration(video_by_id.items[0].contentDetails.duration)
        video["statViewCount"] = int(video_by_id.items[0].statistics.viewCount)
        if video_by_id.items[0].statistics.likeCount:
            video["statLikeCount"] = int(video_by_id.items[0].statistics.likeCount)
        if video_by_id.items[0].statistics.dislikeCount:
            video["statDislikeCount"] = int(video_by_id.items[0].statistics.dislikeCount)
        if video_by_id.items[0].statistics.commentCount:
            video["statCommentCount"] = int(video_by_id.items[0].statistics.commentCount)
        playlist.append(video)
        video["playlistTitle"] = "Other"
        if "author" in item:
            video["author"] = item["author"]
        if "company" in item:
            video["company"] = item["company"]

# write out the json file
with open('./resources/conf_videos/youtube_other.json', 'w') as fp:
    json.dump(playlist, fp, indent=4)


