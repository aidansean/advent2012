from project_module import project_object, image_object, link_object, challenge_object

p = project_object('advent2012', 'Advent Calendar 2012')
p.domain = 'http://www.aidansean.com/'
p.path = 'advent2012'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'advent2012'
p.mathjax = False
p.tags = 'Physics,Outreach,Video'
p.technologies = 'CSS,HTML,JavaScript,YouTube'
p.links.append(link_object(p.domain, 'advent2012/', 'Live page'))
p.links.append(link_object('http://www.youtube.com/', 'aidanatcern', 'YouTube acount'))
p.introduction = 'This is a collection of YouTube videos as made as an outreach project in December 2012.  Each day of Advent gives a different interesting fact about particle physics.'
p.overview = '''This is mostly an exercise in using the YouTube Javascript API.  It was this project that made me realise that the old Javascript API is now deprecated, which means I will have to update the <a href="">Marble Hornets</a> project at some point.'''

p.challenges.append(challenge_object('The YouTube Javascript API changed.', 'Having already become accustomed to the old YouTube API, it was somewhat frustrating to get used to a new one, but such is life and working with bleeding edge technologies!', 'Resolved.'))
