#!/usr/bin/env ruby
 
require 'thor'
require 'open3'
 
class Order < Thor
    desc "git_pull origin-bento", "Order origin-bento by casperjs"
    def git_pull(bento)
        if bento == "origin-bento"
            Open3.capture3("casperjs order.js")
            puts "Completed the order!"
        else
            puts "sorry... Failed to order origin-bento. (´･_･`) "
        end
    end 
end
 
Order.start(ARGV)
