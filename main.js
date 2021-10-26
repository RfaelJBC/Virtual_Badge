const social_media_links = {
  github: 'RfaelJBC',
  youtube: 'channel/UCzWsZRsbQZ7CoN_RR0j4IGA',
  facebook: 'profile.php?id=100006678939604',
  instagram: 'rfael.jbc',
  twitter: '@RfaelJBC'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${social_media_links[social]}`
  }
}
change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${social_media_links.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user_bio.textContent = data.bio
      github_url.href = data.html_url
      accountImage.src = data.avatar_url
      profile_name.textContent = data.login
    })
}
get_github_profile_infos()
