# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'sequoia-hack'
set :repo_url, 'git@bitbucket.org:faasos/sequoia-hack.git'


# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/ubuntu/code/#{fetch(:application)}"

# Default value for :scm is :git
set :scm, :git

# Default value for :format is :airbrussh.
set :format, :airbrussh

# Default value for :format is :airbrussh.
set :format, :airbrussh


# Default value for keep_releases is 5
set :keep_releases, 20


namespace :deploy do

  before :deploy, "deploy:shout_to_slack_start"
  after :publishing, "deploy:run_migrations"
  after :publishing, :restart


  desc 'Tell the world we are deploying'
  task :shout_to_slack_start do
    branch = fetch(:branch)
    platform = fetch(:rails_env)
    git_user = %x[git config user.name]
    require 'slack-notifier'
    on roles(:db) do
      begin
        notifier = Slack::Notifier.new "https://hooks.slack.com/services/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"
        notifier.ping "<!channel> [Sequoia::HACK][#{branch}][#{platform}][#{git_user}] Started Deployment cc @abhishek @saleem @ashish_fassos @soumyadeep @shashank_singh @saish98", http_options: { open_timeout: 5 }
      rescue => e
        puts "shout_to_slack_start Crashed #{e.to_s}"
      end#end of rescue
    end
  end

  desc "Create database and database user"
  task :run_migrations do
    on roles(:db), in: :sequence, wait: 5 do
      within "#{fetch(:deploy_to)}/current/" do
        with RAILS_ENV: fetch(:rails_env) do
          # execute :bundle, "install"
          # execute :rake, "db:migrate"
        end#end of with
      end#end of within
    end#end of on roles
  end#end of task

  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute("cd #{fetch(:deploy_to)} && source bin/activate && cd #{fetch(:deploy_to)}/current/predictions/ &&   pip install gunicorn;pkill -9 gunicorn;  nohup gunicorn predictions.wsgi -w 8 --daemon")
    end
  end
end